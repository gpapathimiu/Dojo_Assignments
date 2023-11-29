
const Main = (props) => {

    return (
        <>
        <div style={{
            backgroundColor: '#e06666',
            height: '500px',
            width: '65%',
            padding: '20px',
        }}>
            {props.children}
        </div>
        </>
    )
}



export default Main;