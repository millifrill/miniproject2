import { Component, CSSProperties } from 'react';
import InfoTable from './infoTable';


interface Props {}
interface State {}
export default class DetailedView extends Component<Props, State> {
    render() {
        return (
            <div style={rootStyle}>
                {/* <ProductContainer /> */}
                <InfoTable />
            </div>
        );
    }
}

const rootStyle: CSSProperties = {
    minHeight: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    margin: '2rem',
};
