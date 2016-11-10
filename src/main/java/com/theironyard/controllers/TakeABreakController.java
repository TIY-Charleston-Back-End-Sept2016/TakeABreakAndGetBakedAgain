package com.theironyard.controllers;

import com.theironyard.entities.ToDoItem;
import com.theironyard.entities.User;
import com.theironyard.services.ToDoItemRepo;
import com.theironyard.services.UserRepo;
import com.theironyard.utitilies.PasswordStorage;
import org.h2.tools.Server;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import javax.annotation.PostConstruct;
import javax.annotation.PreDestroy;
import javax.servlet.http.HttpSession;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.Arrays;

/**
 * Created by zach on 11/10/16.
 */
@RestController
public class TakeABreakController {
    @Autowired
    UserRepo users;

    @Autowired
    ToDoItemRepo items;

    Server h2;

    @PostConstruct
    public void init() throws SQLException, PasswordStorage.CannotPerformOperationException {
        h2 = Server.createWebServer().start();

        if (items.count() == 0) {
            User user = new User("Zach", PasswordStorage.createHash("hunter2"));
            users.save(user);

            items.save(new ToDoItem("Play rocket league", ToDoItem.Category.LEISURE, user));
            items.save(new ToDoItem("Play rocket league", ToDoItem.Category.LEISURE, user));
            items.save(new ToDoItem("Drink beer", ToDoItem.Category.CONSUMPTION, user));
            items.save(new ToDoItem("Take a nap", ToDoItem.Category.LEISURE, user));
            items.save(new ToDoItem("Eat cheetos", ToDoItem.Category.CONSUMPTION, user));
            items.save(new ToDoItem("Go on tinder", ToDoItem.Category.LEISURE, user));
            items.save(new ToDoItem("Existential crisis", ToDoItem.Category.LEISURE, user));
        }
    }

    @PreDestroy
    public void destroy() {
        h2.stop();
    }

    @RequestMapping(path = "/user", method = RequestMethod.POST)
    public ResponseEntity<User> postUser(HttpSession session, @RequestBody User user) throws PasswordStorage.InvalidHashException, PasswordStorage.CannotPerformOperationException {
        User userFromDb = users.findFirstByName(user.getName());
        if (userFromDb == null) {
            user.setPassword(PasswordStorage.createHash(user.getPassword()));
            users.save(user);
        }
        else if (!PasswordStorage.verifyPassword(user.getPassword(), userFromDb.getPassword())) {
            return new ResponseEntity<User>(HttpStatus.FORBIDDEN);
        }

        session.setAttribute("name", user.getName());
        return new ResponseEntity<User>(user, HttpStatus.OK);
    }

    @RequestMapping(path = "/user", method = RequestMethod.GET)
    public User getUser(HttpSession session) {
        String name = (String) session.getAttribute("name");
        return users.findFirstByName(name);
    }

    @RequestMapping(path = "/todos", method = RequestMethod.POST)
    public ResponseEntity<ToDoItem> postToDoItem(HttpSession session, @RequestBody ToDoItem item) {
        String name = (String) session.getAttribute("name");
        if (name == null) {
            return new ResponseEntity<ToDoItem>(HttpStatus.FORBIDDEN);
        }

        item.setUser(users.findFirstByName(name));
        return new ResponseEntity<ToDoItem>(items.save(item), HttpStatus.OK);
    }

    @RequestMapping(path = "/todos", method = RequestMethod.GET)
    public ArrayList<ToDoItem> getToDoItem() {
        ToDoItem consumption = items.randomItems(ToDoItem.Category.CONSUMPTION).iterator().next();
        ToDoItem leisure = items.randomItems(ToDoItem.Category.LEISURE).iterator().next();
        ToDoItem baked = new ToDoItem("Get baked", ToDoItem.Category.BAKED, null);

        ArrayList<ToDoItem> randomItems = new ArrayList<>();
        randomItems.add(consumption);
        randomItems.add(leisure);
        randomItems.add(baked);
        return randomItems;
    }
}
