import Header from '@/components/Header';
import Questions from '@/components/faq/Questions';

const FAQ = () => {
    return (
        <div className="px-4 w-full xs:px-2">
            <Header title="FAQ" description="Frequently Asked Questions Page" />
            <Questions />
        </div>
    )
}
export default FAQ