export enum RabbitMQ {
  MatchQueue = 'MatchQueue',
  PlayerQueue = 'PlayerQueue',
  TeamQueue = 'TeamQueue',
  UserQueue = 'UserQueue',
}

export enum UserMSG {
  CREATE = 'CREATE_USER',
  FIND_ALL = 'FIND_USERS',
  FIND_ONE = 'FIND_USER',
  UPDATE = 'UPDATE_USER',
  DELETE = 'DELETE_USER',
  VALID_USER = 'VALID_USER',
  FIND_EMAIL = 'FIND_EMAIL',
}

export enum MatchMSG {
  CREATE = 'CREATE_MATCH',
  FIND_ALL = 'FIND_ALL',
  FIND_ONE = 'FIND_MATCH',
  UPDATE = 'UPDATE_MATCH',
  DELETE = 'DELETE_MATCH',
}

export enum PlayerMSG {
  CREATE = 'CREATE_PLAYER',
  FIND_ALL = 'FIND_PLAYERS',
  FIND_ONE = 'FIND_PLAYER',
  UPDATE = 'UPDATE_PLAYER',
  DELETE = 'DELETE_PLAYER',
}

export enum TeamMSG {
  FIND_ALL = 'FIND_ALL_TEAMS',
  FIND_ONE = 'FIND_ONE_TEAM',
  CREATE = 'CREATE_TEAM',
  UPDATE = 'UPDATE_TEAM',
  DELETE = 'DELETE_TEAM',
  ADD_PLAYER_TO_TEAM = 'ADD_PLAYER_TO_TEAM',
}
