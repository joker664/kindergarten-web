package com.hxd.action;

import com.hxd.domain.TestObject;
import com.hxd.form.TestForm;
import com.hxd.service.TestService;

import javax.annotation.Resource;

/**
 * Created by Joker on 2015/11/4.
 */

public class TestAction extends BaseAction {
    @Resource
    private TestService testService;
    private TestForm testForm;

    public String testJson() {
        TestObject object = testService.service("huangxudong");
        testForm = TestForm.fromDomain(object);
        return SUCCESS;
    }

    public void setTestForm(TestForm testForm) {
        this.testForm = testForm;
    }

    public TestForm getTestForm() {
        return testForm;
    }
}
