import Done from '../DoneComponent/Done'
import InProgress from '../InProgressComponent/InProgress'
import Todo from '../TodoComponent/Todo'

const Home = () => {
    return (
        <>
            <section id='home'>
                <div className='title'>
                    <h3 className="text-white">Atlassian basic board</h3>
                </div>
                <div className="container-fluid">

                    <div className="row pt-4">
                        <Todo />
                        <InProgress />
                        <Done />


                    </div>
                </div>

            </section>
        </>
    )
}

export default Home