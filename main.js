// Dummy data for demonstration
const dummyBlogs = [
    { title: 'First Blog', content: 'This is the content of the first blog.' },
    { title: 'Second Blog', content: 'This is the content of the second blog.' }
];

document.addEventListener('DOMContentLoaded', () => {
    displayBlogs(dummyBlogs);
});

function addBlog() {
    const title = document.getElementById('blogTitle').value;
    const content = document.getElementById('blogContent').value;

    if (title && content) {
        const newBlog = { title, content };
        dummyBlogs.push(newBlog);

        displayBlogs(dummyBlogs);

        // Clear form fields
        document.getElementById('blogTitle').value = '';
        document.getElementById('blogContent').value = '';
    } else {
        alert('Please fill in both title and content.');
    }
}

function displayBlogs(blogs) {
    const blogsContainer = document.getElementById('blogs');
    blogsContainer.innerHTML = '';

    blogs.forEach(blog => {
        const blogDiv = document.createElement('div');
        blogDiv.classList.add('blog');

        const titleElement = document.createElement('h3');
        titleElement.textContent = blog.title;

        const contentElement = document.createElement('p');
        contentElement.textContent = blog.content;

        blogDiv.appendChild(titleElement);
        blogDiv.appendChild(contentElement);

        blogsContainer.appendChild(blogDiv);
    });
}
