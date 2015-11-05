package com.hxd.form;

import com.google.common.base.Optional;
import com.hxd.domain.TestObject;

/**
 * Created by Joker on 2015/10/31.
 */
public class TestForm {
    private String id;
    private String name;

    public TestForm() {
    }

    public TestForm(String id, String name) {
        this.id = id;
        this.name = name;
    }

    public static TestForm fromDomain(TestObject testObject) {
        Optional optional = Optional.fromNullable(testObject);
        if (optional.isPresent()) {
            return new TestForm(testObject.getId(), testObject.getName());
        } else {
            return new TestForm();
        }
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }
}
