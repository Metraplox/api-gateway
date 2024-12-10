// api-gateway/src/common/constants.ts

export enum RabbitMQ {
    CoursesQueue = 'courses_queue',
    UserQueue = 'user_queue',
    PaymentQueue = 'payment_queue',
    ChatbotQueue = 'chatbot_queue', // Añadir esta línea
}

export enum ChatbotMSG {
    MESSAGE = 'MESSAGE',
}