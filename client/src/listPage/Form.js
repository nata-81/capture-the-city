const Form = () => {
    return (
        <div style={{ display: 'flex', flexDirection: 'column' }}>
            <input type="text" placeholder="What's Happening?" style={{ backgroundColor: 'transparent', borderTop: 'None', borderRight: 'None', borderLeft: 'None', fontSize: '30px' }}></input>
            <div style={{ height: '20px' }}></div>
            <input type="text" placeholder="Describe the details" style={{ backgroundColor: 'transparent', borderTop: 'None', borderRight: 'None', borderLeft: 'None', fontSize: '20px' }}></input>
            <div style={{ height: '20px' }}></div>
            <button>Submit</button>
            <div style={{ height: '20px' }}></div>
        </div>
    );
}

export default Form;