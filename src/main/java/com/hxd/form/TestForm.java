package com.hxd.form;

import com.hxd.domain.TestObject;

/**
 * Created by Joker on 2015/10/31.
 */
public class TestForm {
    private String name;
    private Integer age;

    public TestForm(String name, Integer age) {
        this.name = name;
        this.age = age;
    }

    public static TestForm fromDomain(TestObject testObject) {
        return new TestForm(testObject.getName(), testObject.getAge());
    }

    public Integer getAge() {
        return age;
    }

    public void setAge(Integer age) {
        this.age = age;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }
}
