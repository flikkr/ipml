import ipImage from "../../../assets/ip.jpg";
import { HighlightItem } from "../../../components/common/Common";

export function IvanPoluninSection() {
  return (
    <section id='who-is-ip' className='space-y-40'>
      <div className='md:grid md:grid-cols-2 md:gap-7 md:space-y-3'>
        <img
          className='sm:col-span-2 xl:col-span-1 rounded mb-14 md:mb-5'
          src={ipImage}
          alt='Ivan Polunin'
        />
        <div className='space-y-14 md:space-y-8 md:col-span-2 xl:col-span-1'>
          <h2 className='mb-7 text-center md:text-left'>
            Who is Ivan Polunin?
          </h2>
          <p className='text-left'>
            Sit eiusmod occaecat laborum dolore et in dolor. In laboris commodo
            ipsum consequat non et aute magna est. In incididunt nulla ipsum
            tempor. In labore nulla labore ullamco non. Nostrud consequat
            officia enim aute culpa cillum tempor tempor. Sit eiusmod occaecat
            laborum dolore et in dolor. In laboris commodo ipsum consequat non
            et aute magna est. In incididunt nulla ipsum tempor. In labore nulla
            labore ullamco non. Nostrud consequat officia enim aute culpa cillum
            tempor tempor. Sit eiusmod occaecat laborum
          </p>
          <div className='space-y-5 mt-5'>
            <HighlightItem title='The Humanist'>
              <p>
                Velit nostrud aliqua ullamco Lorem sunt ad ad nisi. Anim quis
                eiusmod eu ut non. Dolore occaecat deserunt ea quis ea
                adipisicing duis excepteur est.
              </p>
            </HighlightItem>
            <HighlightItem title='The Ethnomusicologist'>
              <p>
                Velit nostrud aliqua ullamco Lorem sunt ad ad nisi. Anim quis
                eiusmod eu ut non. Dolore occaecat deserunt ea quis ea
                adipisicing duis excepteur est.
              </p>
            </HighlightItem>
            <HighlightItem title='The Botanist'>
              <p>
                Velit nostrud aliqua ullamco Lorem sunt ad ad nisi. Anim quis
                eiusmod eu ut non. Dolore occaecat deserunt ea quis ea
                adipisicing duis excepteur est.
              </p>
            </HighlightItem>
            <HighlightItem title='The Doctor'>
              <p>
                Velit nostrud aliqua ullamco Lorem sunt ad ad nisi. Anim quis
                eiusmod eu ut non. Dolore occaecat deserunt ea quis ea
                adipisicing duis excepteur est.
              </p>
            </HighlightItem>
          </div>
        </div>
      </div>

      <div className='mt-20 lg:w-3/5 md:w-full text-center mx-auto'>
        <h3 className='mb-8'>Watch him in action</h3>
        <div
          className='relative w-full h-0'
          style={{ paddingBottom: "56.25%" }}
        >
          {/* w-full mx-auto md:w-full lg:w-4/5 */}
          <iframe
            width='560'
            height='315'
            className='absolute top-0 left-0 w-full h-full'
            src='https://www.youtube.com/embed/qP1_ilEYHFk'
            title='YouTube video player'
            frameBorder='0'
            allow='accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
            allowFullscreen
          ></iframe>
        </div>
      </div>
    </section>
  );
}
