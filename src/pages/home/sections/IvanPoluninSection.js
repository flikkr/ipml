import ipImage from "../../../assets/ip.jpg";
import { HighlightItem } from "../../../components/common/Common";

export function IvanPoluninSection() {
  return (
    <section id='who-is-ip'>
      <div className='mb-5 sm:grid sm:grid-cols-2 sm:gap-5 space-y-3 items-center'>
        <img src={ipImage} alt='Ivan Polunin' />
        <div className=''>
          <h2 className='mb-7 text-center md:text-left'>
            Who is Ivan Polunin?
          </h2>
          <p className='text-left'>
            Sit eiusmod occaecat laborum dolore et in dolor. In laboris commodo
            ipsum consequat non et aute magna est. In incididunt nulla ipsum
            tempor. In labore nulla labore ullamco non. Nostrud consequat
            officia enim aute culpa cillum tempor tempor.
          </p>
        </div>
      </div>

      <iframe
        // width='560'
        // height='315'
        className='w-full my-16 mx-auto h-3/5 md:w-4/5'
        src='https://www.youtube.com/embed/qP1_ilEYHFk'
        title='YouTube video player'
        frameBorder='0'
        allow='accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
        allowFullscreen
      ></iframe>
      <div className='space-y-5'>
        <HighlightItem title='The Humanist'>
          <p>
            Velit nostrud aliqua ullamco Lorem sunt ad ad nisi. Anim quis
            eiusmod eu ut non. Dolore occaecat deserunt ea quis ea adipisicing
            duis excepteur est.
          </p>
        </HighlightItem>
        <HighlightItem title='The Ethnomusicologist'>
          <p>
            Velit nostrud aliqua ullamco Lorem sunt ad ad nisi. Anim quis
            eiusmod eu ut non. Dolore occaecat deserunt ea quis ea adipisicing
            duis excepteur est.
          </p>
        </HighlightItem>
        <HighlightItem title='The Botanist'>
          <p>
            Velit nostrud aliqua ullamco Lorem sunt ad ad nisi. Anim quis
            eiusmod eu ut non. Dolore occaecat deserunt ea quis ea adipisicing
            duis excepteur est.
          </p>
        </HighlightItem>
        <HighlightItem title='The Doctor'>
          <p>
            Velit nostrud aliqua ullamco Lorem sunt ad ad nisi. Anim quis
            eiusmod eu ut non. Dolore occaecat deserunt ea quis ea adipisicing
            duis excepteur est.
          </p>
        </HighlightItem>
      </div>
    </section>
  );
}
