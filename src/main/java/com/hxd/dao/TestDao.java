package com.hxd.dao;

import com.hxd.domain.TestObject;

/**
 * Created by Joker on 2015/10/31.
 */
public class TestDao extends BaseDao {

    public TestObject queryForObjectByName(String name) {
        return (TestObject) sqlMapClientTemplate.queryForObject("queryForObjectByName", name);
    }
}
