import {useState} from 'react';
import {useNavigate} from 'react-router-dom';

const Create = () => {
    // eslint-disable-next-line
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    // eslint-disable-next-line
    const [author, setAuthor] = useState('Graham');
    const [isPending, setIsPending] = useState(false);
    const history = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        const blog = {title, body, author};

        setIsPending(true);

        fetch('http://localhost:8000/blogs', {
            method: 'POST',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(blog)
        }).then(() => {
            setIsPending(false);
            history.push('/');
        })
    }

    return(
        <div className='create'>
            <h2>Add new blog</h2>
            <form onSubmit={handleSubmit}>
                <label>Blog Title</label>
                <input 
                    type="text"
                    required
                    value={title}
                    onChange={(e) => setBody(e.target.value)}
                />
                <label>Blog body:</label>
                <textarea 
                    required
                    value={body}
                    onChange={(e) => setBody(e.target.value)}
                />
                <label>Blog author:</label>
                <input 
                    type="text"
                    disabled
                    value="Graham Morby"
                />

                {!isPending && <button>Add blog</button>}
                {isPending && <button disabled>Adding blog</button>}
            </form>
        </div>
    )
}

export default Create;