package com.theironyard.entities;

import javax.persistence.*;

/**
 * Created by zach on 11/10/16.
 */
@Entity
@Table(name = "todo_items")
public class ToDoItem {
    public enum Category {
        CONSUMPTION,
        LEISURE,
        BAKED
    }

    @Id
    @GeneratedValue
    int id;

    @Column(nullable = false)
    String task;

    @Column(nullable = false)
    Category category;

    @ManyToOne
    User user;

    public ToDoItem() {
    }

    public ToDoItem(String task, Category category, User user) {
        this.task = task;
        this.category = category;
        this.user = user;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getTask() {
        return task;
    }

    public void setTask(String task) {
        this.task = task;
    }

    public Category getCategory() {
        return category;
    }

    public void setCategory(Category category) {
        this.category = category;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }
}
