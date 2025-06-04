export const GENERAL_ENDPOINTS = {
  BASE_API_URL: "/api/v2",
  ANALYTICS: "/analytics",
  AUTH: "/auth",
  IMAGES: "/images",
  POSTS: "/posts",
  USERS: "/users",
  COMMENTS: "/comments",
  POSTS_SAVES: "/posts-saves",
  PROPERTY_SAVES: "/property-saves",
  FOLLOWS: "/follows",
  LIKES: "/likes",
  GOOGLE: "/google",
  BLOGS: "/blogs",
  OFFICIAL_BLOGS: "/official-blogs",
  AMENITIES: "/amenities",
  CATEGORIES: "/categories",
  SUBCATEGORIES: "/subcategories",
  PROPERTY: "/properties",
  REQUEST_SELL_PROPERTY: "/request-sell-property",
  REQUEST_BUY_PROPERTY: "/request-buy-property",
  PROJECTS: "/projects",
  CALL_REQUESTS: "/call-requests",
  CHATS: "/chats",
  LEADS: "/leads",
  INTERACTIONS: "/interactions",
  NEWS: "/news",
  SCHEDULER: "/scheduler",
  NOTIFICATIONS: "/notifications",
  PROPERTIES_XML: "/properties-xml",
  CONTACT_US: "/contact-us",
  CONFIG: "/config",
  SUBSCRIPTIONS: "/subscriptions",
  PAYMENT: "/payment",
  CREDITS_REQUESTS: "/credits-requests",
};

export const PROPERTY_ENDPOINTS = {
  CREATE: "/",
  GET_ALL: "/",
  GET_ONE: "/one/:id",
  GET_NEAREST: "/nearest",
  UPDATE: "/one/:id",
  DELETE: "/one/:id",
  GET_ANALYTICS: "/analytics",
  BULK_UPDATE_RECOMMENDATION: "/bulk-update-recommendation",
};
export const PROJECT_ENDPOINTS = {
  CREATE: "/",
  GET_ALL: "/",
  GET_ONE: "/:id",
  UPDATE: "/:id",
  DELETE: "/:id",
};

export const REQUEST_SELL_PROPERTIES_ENDPOINTS = {
  CREATE: "/",
  GET_ALL: "/",
  GET_ONE: "/:id",
  UPDATE: "/:id",
  DELETE: "/:id",
};
export const REQUEST_BUY_PROPERTIES_ENDPOINTS = {
  CREATE: "/",
  GET_ALL: "/",
  GET_ONE: "/:id",
  UPDATE: "/:id",
  DELETE: "/:id",
};

export const AUTHENTICATION_ENDPOINTS = {
  REGISTER: "/register",
  LOGIN: "/login",
  SEND_OTP: "/send-otp",
  VERIFY_OTP: "/verify-otp",
  FORGET_PASSWORD: "/forget-password",
  RESET_PASSWORD: "/reset-password",
  QUICK_GUEST_REGISTER: "/quick-guest-register",
  LOGOUT: "/logout",
  LOG_IN_AS: "/login-as",
};

export const FILES_ENDPOINTS = {
  UPLOAD: "/upload",
};

export const USER_ENDPOINTS = {
  GET_ME: "/me",
  GET_DEFAULT_SUPPORT_USER: "/default-support-user",
  UPDATE_ME: "/update-me",
  GET_ALL_AS_ADMIN: "/get-all-as-admin",
  GET_ALL_COMMUNITY: "/community-users",
  GET_ONE: "/get-one/:id",
  GET_USERS_AS_COMPANY: "/get-users-as-company",
  GET_ONE_AS_COMPANY: "/get-one-as-company/:id",
  GET_ONE_COMMUNITY: "/community-profile/:id",
  USERS_ANALYTICS: "/users-analytics",
  CREATE_AS_COMPANY: "/create-as-company",
  CREATE_AS_ADMIN: "/create-as-admin",
  UPDATE_USER_AS_COMPANY: "/update-user-as-company/:id",
  UPDATE_USER_AS_ADMIN: "/update-user-as-admin/:id",
  DELETE_AS_ADMIN: "/delete-as-admin/:id",
  DELETE_AS_COMPANY: "/delete-as-company/:id",
  DELETE_ME: "/delete-me",
  GET_TOP_PERFORMERS: "/top-performers",
};

export const POSTS_ENDPOINTS = {
  CREATE: "/",
  READ: "/",
  UPDATE: "/:id",
  DELETE: "/:id",
  GET_BY_ID: "/:id",
};

export const COMMENTS_ENDPOINTS = {
  CREATE: "/",
  READ: "/",
  UPDATE: "/:id",
  DELETE: "/:id",
  GET_BY_ID: "/:id",
};

export const POSTS_SAVES_ENDPOINTS = {
  CREATE: "/",
  READ: "/",
  DELETE: "/",
  GET_BY_ID: "/:id",
};

export const OFFICIAL_BLOGS_ENDPOINTS = {
  CREATE: "/",
  READ: "/",
  UPDATE: "/:id",
  DELETE: "/:id",
  GET_BY_ID: "/:id",
  GET_BY_SLUG: "/slug/:slug",
};

export const PROPERTY_SAVES_ENDPOINTS = {
  CREATE: "/",
  READ: "/",
  DELETE: "/",
  GET_BY_ID: "/:id",
};

export const FOLLOWS_ENDPOINTS = {
  CREATE: "/",
  READ: "/",
  DELETE: "/",
  GET_BY_ID: "/:id",
};

export const LIKES_ENDPOINTS = {
  CREATE: "/",
  READ: "/",
  DELETE: "/",
  GET_BY_ID: "/:id",
};

export const GOOGLE_ENDPOINTS = {
  PLACE_DETAILS: "/place-details",
  PLACE_SEARCH: "/place-search",
};

export const BLOGS_ENDPOINTS = {
  CREATE: "/",
  READ: "/",
  UPDATE: "/:id",
  DELETE: "/:id",
  GET_BY_ID: "/:id",
};

export const CATEGORIES_ENDPOINTS = {
  GET_ALL: "/",
  CREATE: "/",
  UPDATE: "/:id",
  DELETE: "/:id",
  GET_BY_ID: "/:id",
};

export const AMENITY_ENDPOINTS = {
  GET_ALL: "/",
  CREATE: "/",
  UPDATE: "/:id",
  DELETE: "/:id",
  GET_BY_ID: "/one/:id",
};

export const SUB_CATEGORIES_ENDPOINTS = {
  GET_ALL: "/",
  CREATE: "/",
  UPDATE: "/:id",
  DELETE: "/:id",
  GET_BY_ID: "/one/:id",
};

export const CALL_REQUEST_ENDPOINTS = {
  GET_ALL: "/all",
  GET_ONE: "/:id",
  CREATE: "/",
  UPDATE: "/:id",
  DELETE: "/:id",
} as const;

export const CHAT_ENDPOINTS = {
  CREATE: "/",
  READ: "/",
  GET_MESSAGES: "/:id/messages",
} as const;

// Not used for now, might be used in the admin panel
export const MESSAGE_ENDPOINTS = {
  CREATE: "/",
  READ: "/:chatId",
  UPDATE: "/:id",
  DELETE: "/:id",
  GET_BY_ID: "/one/:id",
  READ_MESSAGES: "/read/:chatId",
} as const;
export const LEADS_ENDPOINTS = {
  GET_ALL: "/",
  GET_ONE: "/:id",
  CREATE: "/",
  UPDATE: "/:id",
  DELETE: "/:id",
};

export const INTERACTIONS_ENDPOINTS = {
  GET_ALL: "/",
  GET_ONE: "/:id",
};

export const ANALYTICS_ENDPOINTS = {
  GET_PROPERTIES: "/properties",
  GET_USERS: "/users",
  GET_COMMUNITY: "/community",
  GET_LATEST_COMMENTS: "/latest-comments",
};

export const NEWS_ENDPOINTS = {
  GET_ALL: "/",
  GET_ONE: "/:id",
};

export const SCHEDULER_ENDPOINTS = {
  DAILY: "/daily",
};

export const NOTIFICATIONS_ENDPOINTS = {
  GET_ALL: "/",
  GET_ONE: "/:id",
  UPDATE: "/:id",
  DELETE_ONE: "/one/:id",
  DELETE_ALL: "/delete-all",
  COUNT_UNREAD: "/count-unread",
};

export const PROPERTIES_XML_ENDPOINTS = {
  CREATE: "/",
  PUBLISH: "/publish",
  UPDATE_AGENT_EMAIL: "/update-agent-email/:id",
  ADMIN_APPROVEMENT: "/admin-approvement/:id",
  GET_ALL: "/",
  GET_ONE: "/:id",
};

export const CONTRACT_US_ENDPOINTS = {
  GET_ALL: "/",
  CREATE: "/",
  UPDATE: "/:id",
  DELETE: "/:id",
  GET_BY_ID: "/:id",
};

export const CONFIG_ENDPOINTS = {
  GET: "/",
  UPDATE: "/",
};

export const SUBSCRIPTION_ENDPOINTS = {
  GET_ALL: "/",
  CREATE: "/",
  GET_ONE: "/one/:id",
  GET_MINE: "/my-subscription",
  UPDATE: "/:id",
  DELETE: "/:id",
};

export const PAYMENT_ENDPOINTS = {
  CREATE_SESSION_CREDITS: "/create-session-credits",
  WEBHOOK: "/webhook",
  GET: "/",
} as const;

export const CREDITS_REQUESTS_ENDPOINTS = {
  CREATE: "/",
  GET_ALL: "/",
  GET_ONE: "/:id",
  UPDATE_STATUS: "/status/:id",
} as const;
