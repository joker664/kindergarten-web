package com.hxd.dao;

import com.ibatis.sqlmap.client.SqlMapClient;
import org.springframework.orm.ibatis.SqlMapClientTemplate;
/**
 * Created by Joker on 2015/11/4.
 */
public class BaseDao {
    protected SqlMapClientTemplate sqlMapClientTemplate = new SqlMapClientTemplate();

    public void setSqlMapClient(SqlMapClient sqlMapClient) {
        this.sqlMapClientTemplate.setSqlMapClient(sqlMapClient);
        this.sqlMapClientTemplate.setDataSource(sqlMapClient.getDataSource());
    }
}
