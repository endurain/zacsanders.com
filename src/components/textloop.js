import TextLoop from 'react-text-loop';


const textloop = {
    render() {
        return (
            <h2>
                <TextLoop>
                    <span>First item</span>
                    <Link to="/">Second item</Link>
                    <BodyText>Third item</BodyText>
                </TextLoop> and something else.
            </h2>
        );
    }
}

export default textloop;
