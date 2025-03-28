package com.entity.view;

import com.entity.FangyuanfenleiEntity;

import com.baomidou.mybatisplus.annotations.TableName;
import org.apache.commons.beanutils.BeanUtils;
import java.lang.reflect.InvocationTargetException;

import java.io.Serializable;
 

/**
 * 房源分类
 * 后端返回视图实体辅助类   
 * （通常后端关联的表或者自定义的字段需要返回使用）
 * @author 
 * @email 
 * @date 2022-05-01 13:36:45
 */
@TableName("fangyuanfenlei")
public class FangyuanfenleiView  extends FangyuanfenleiEntity implements Serializable {
	private static final long serialVersionUID = 1L;

	public FangyuanfenleiView(){
	}
 
 	public FangyuanfenleiView(FangyuanfenleiEntity fangyuanfenleiEntity){
 	try {
			BeanUtils.copyProperties(this, fangyuanfenleiEntity);
		} catch (IllegalAccessException | InvocationTargetException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
 		
	}
}
