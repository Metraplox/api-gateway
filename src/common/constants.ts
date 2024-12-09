export enum RabbitMQ {
  CoursesQueue = 'courses_queue',
  UserQueue = 'user_queue',
  PaymentQueue = 'payment_queue',
}

export enum PaymentMSG {
  TRANSACTION = 'TRANSACTION',
  CONFIRM_PAYMENT = 'CONFIRM_PAYMENT',
  CHECK_TRANSACTION = 'CHECK_TRANSACTION',
}

export enum CoursesMSG {
  CREATE = 'CREATE',
  FIND_ALL = 'FIND_ALL',
  FIND_ONE = 'FIND_ONE',
  UPDATE = 'UPDATE',
  DELETE = 'DELETE',
  FIND_BY_CATEGORY = 'FIND_BY_CATEGORY',
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
