export enum RabbitMQ {
  CoursesQueue = 'courses_queue',
  UserQueue = 'user_queue',
  PaymentQueue = 'payment_queue',
  ChatbotQueue = 'chatbot_queue',
}

export enum CoursesMSG {
  CREATE = 'CREATE',
  FIND_ALL = 'FIND_ALL',
  FIND_ONE = 'FIND_ONE',
  UPDATE = 'UPDATE',
  DELETE = 'DELETE',
  FIND_BY_CATEGORY = 'FIND_BY_CATEGORY',
  RATE_COURSE = 'RATE_COURSE',
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

export enum ChatbotMSG {
    MESSAGE = 'MESSAGE',
}
