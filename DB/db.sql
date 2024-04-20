-- 
INSERT INTO blog_posts(topic, description, category, content) values ('blog1', 'about abc', 'life', 'lorem ipsum 100')
CREATE TABLE blogs(
    id BIGSERIAL NOT NULL,
    topic TEXT NOT NULL,
    description TEXT,
    category VARCHAR(10) NOT NULL,
    content TEXT NOT NULL,
    date TIMESTAMP DEFAULT CURRENT_TIMESTAMP
)