package com.hxd.service;

import com.hxd.dao.TestDao;
import com.hxd.domain.TestObject;
import com.hxd.form.TestForm;
import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;

import javax.annotation.Resource;

/**
 * Created by Joker on 2015/10/31.
 */
public class TestService {
    private Log log = LogFactory.getLog(TestService.class);
    @Resource
    private TestDao testDao;
    public TestForm service(String name) {
        TestObject object = testDao.queryForObjectByName(name);
        TestForm testForm = TestForm.fromDomain(object);
        return testForm;
    }
}
