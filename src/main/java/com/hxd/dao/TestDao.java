package com.hxd.dao;

import com.hxd.domain.TestObject;
import com.ibatis.sqlmap.client.SqlMapClient;
import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;

import javax.annotation.Resource;
import java.sql.SQLException;

/**
 * Created by Joker on 2015/10/31.
 */
public class TestDao {
    private Log log = LogFactory.getLog(TestDao.class);
    @Resource
    private SqlMapClient sqlMapClient;

    public TestObject queryForObjectByName(String name) {
        TestObject testObject = null;
        try {
            testObject = (TestObject) sqlMapClient.queryForObject("queryForObjectByName", name);
        } catch (SQLException e) {
            log.error(e);
        }
        return testObject;
    }
}
