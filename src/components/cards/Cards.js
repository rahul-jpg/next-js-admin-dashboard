import Card from "./Card"
import { MdPointOfSale } from 'react-icons/md';
import { FaEnvelope, FaUserPlus, FaTrafficLight } from 'react-icons/fa';

const Cards = () => {
    return (
        <>
            <Card
                logo={<FaEnvelope />}
                value="1,22255"
                title="Emails Sent"
                percent={50}
            />
            <Card
                logo={<MdPointOfSale />}
                value="1,22255"
                title="Sales Obtained"
                percent={75}
            />
            <Card
                logo={<FaUserPlus />}
                value="1,22255"
                title="New Clients"
                percent={45}
            />
            <Card
                logo={<FaTrafficLight />}
                value="1,22255"
                title="Traffic Received"
                percent={85}
            />
        </>
    )
}
export default Cards