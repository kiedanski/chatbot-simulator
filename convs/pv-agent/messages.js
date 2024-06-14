const messages = [
    {"message": "Hi, how can I help you today?", "data": "text", "role": "bot"},
    {"message": "I'm thinking about getting a solar panel, but I'm not sure if it's a good idea", "data": "text", "role": "user"},
    {"message": "No problem, I can help you with that. Where do you live?", "data": "text", "role": "bot"},
    {"message": "I live at 3601 Lyon St, SF", "data": "img", "role": "user"},
    {"message": "I will use your address to estimate what capacity you could install and how much solar hours you get every year. In the meantime, I'm need some additional information.", "data": "text", "role": "bot"},
    {"message": "Do you know how much energy you consume per month?", "data": "text", "role": "bot"},
    {"message": "Not really, how can I know?", "data": "text", "role": "user"},
    {"message": "I can help you estimate that. Can you tell me how many people live in your household?", "data": "text", "role": "bot"},
    {"message": "It's just me and my partner. We really only use electricty for the TV and the fridge", "data": "text", "role": "user"},
    {"message": "Fantastic! 🙌 From this information we believe you might consume approximately 200kWh every month.", "data": "text", "role": "bot"},
    {"message": "Your address data has finished processing", "data": "text", "role": "bot"},
    {"message": "roof-predicted.png", "data": "img", "role": "bot"},
    {"message": "Your house is facing north and has capacity for up a system of up to 10kW. I would recommened going for a total of 6kW of installed capacity. Would you be interested in a formal quote?", "data": "text", "role": "bot"},
    {"message": "Yes, please.", "data": "text", "role": "user"},
    {"message": "Please provide me your name and phone number and we will contact you later today with a formal quoute", "data": "text", "role": "bot"},
    {"message": "Jane Doe. (555) 123-456", "data": "text", "role": "user"},
    {"message": "Thanks for contacting PV-bots. A member of our team will reach out today with more details", "data": "text", "role": "bot"},
]

export default messages;
