package com.hxd.action;

import com.hxd.domain.TestObject;
import com.hxd.service.TestService;
import com.opensymphony.xwork2.ActionSupport;

import javax.annotation.Resource;

/**
 * Created by Joker on 2015/10/31.
 */
public class TestAction extends ActionSupport {
    @Resource
    private TestService testService;

    private TestObject testObject;
    public String test() {
        testService.service("hxd");
        return SUCCESS;
    }
    public String testInput() {
        return SUCCESS;
    }

    public String testObject() {
        TestObject object = new TestObject();
        object.setName("黄旭冬");
        object.setAge(23);
        this.setTestObject(object);
        return SUCCESS;
    }

    public TestObject getTestObject() {
        return testObject;
    }

    public void setTestObject(TestObject testObject) {
        this.testObject = testObject;
    }

    public TestService getTestService() {
        return testService;
    }

    public void setTestService(TestService testService) {
        this.testService = testService;
    }
}
