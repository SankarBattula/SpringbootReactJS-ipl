package io.sb.ipldashboard.repository;

import org.springframework.data.repository.CrudRepository;

import io.sb.ipldashboard.model.Team;

public interface TeamRepository extends CrudRepository<Team , Long>{
    
    Team findByTeamName(String teamName);
}
