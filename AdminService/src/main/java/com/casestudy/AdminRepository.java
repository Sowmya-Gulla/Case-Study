package com.casestudy;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;
@Repository
public interface AdminRepository extends MongoRepository<Admin,String>{

}
