package com.theironyard.services;

import com.theironyard.entities.ToDoItem;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

/**
 * Created by zach on 11/10/16.
 */
public interface ToDoItemRepo extends CrudRepository<ToDoItem, Integer> {
    @Query("SELECT t FROM ToDoItem t WHERE t.category = ?1 ORDER BY RAND()")
    Iterable<ToDoItem> randomItems(ToDoItem.Category category);
}
