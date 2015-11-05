package com.hxd.service;

import com.hxd.dao.TestDao;
import com.hxd.domain.TestObject;
import com.hxd.form.TestForm;
import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;

import javax.annotation.Resource;
import javax.ws.rs.Consumes;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.QueryParam;
import javax.ws.rs.core.MediaType;

/**
 * Created by Joker on 2015/10/31.
 */
@Path("/test")
@Consumes(MediaType.APPLICATION_JSON)
@Produces(MediaType.APPLICATION_JSON)
public class TestService {
    private Log log = LogFactory.getLog(TestService.class);
    @Resource
    private TestDao testDao;
    @Path("hxd")
    public TestForm service(@QueryParam("name")String name) {
        TestObject object = testDao.queryForObjectByName(name);
        TestForm testForm = TestForm.fromDomain(object);
        return testForm;
    }
}
