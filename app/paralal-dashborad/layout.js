const layout = ({ children, assignment, notification, quize }) => {
    return (
        <>
            <div className="container mx-auto grid grid-cols-2 grid-rows-2 gap-5 my-10">
                {assignment}
                {quize}
                {notification}
            </div>
            {children}
        </>
    );
};

export default layout;
