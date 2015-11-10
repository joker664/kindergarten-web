package com.hxd.service;

import com.google.common.collect.Lists;
import com.hxd.dao.TestDao;
import com.hxd.domain.TestObject;
import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;

import javax.annotation.Resource;
import javax.ws.rs.*;
import javax.ws.rs.core.MediaType;
import java.util.List;

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
    @GET
    @Path("/hxd")
    public TestObject service(@QueryParam("name")String name) {
        TestObject object = testDao.queryForObjectByName(name);
        return object;
    }
    @GET
    @Path("/sth")
    public List<String> mapserv() {
        return Lists.newArrayList("huang","xu","dong");
    }
}
