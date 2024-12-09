export enum RabbitMQ {
  CoursesQueue = 'courses_queue',
  UserQueue = 'user_queue',
  PaymentQueue = 'payment_queue',
}

export enum CoursesMSG {
  CREATE = 'CREATE',
  FIND_ALL = 'FIND_ALL',
  FIND_ONE = 'FIND_ONE',
  UPDATE = 'UPDATE',
  DELETE = 'DELETE',
}

export enum UserMSG {
  CREATE = 'CREATE',
  FIND_ALL = 'FIND_ALL',
  FIND_ONE = 'FIND_ONE',
  UPDATE = 'UPDATE',
  DELETE = 'DELETE',
  VALID_USER = 'VALID_USER',
  FIND_EMAIL = 'FIND_EMAIL',
}
