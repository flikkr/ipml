import ipImage from "../../../assets/ip.jpg";
import HighlightItem from "../../../components/HighlightItem";

const details = [
  {
    title: "The Humanist",
    icon: "",
    description:
      "Velit nostrud aliqua ullamco Lorem sunt ad ad nisi. Anim quis eiusmod eu ut non. Dolore occaecat deserunt ea quis ea adipisicing duis excepteur est.",
  },
  {
    title: "The Ethnomusicologist",
    icon: "",
    description:
      "Velit nostrud aliqua ullamco Lorem sunt ad ad nisi. Anim quis eiusmod eu ut non. Dolore occaecat deserunt ea quis ea adipisicing duis excepteur est.",
  },
  {
    title: "The Botanist",
    icon: "",
    description:
      "Velit nostrud aliqua ullamco Lorem sunt ad ad nisi. Anim quis eiusmod eu ut non. Dolore occaecat deserunt ea quis ea adipisicing duis excepteur est.",
  },
  {
    title: "The Doctor",
    icon: "",
    description:
      "Velit nostrud aliqua ullamco Lorem sunt ad ad nisi. Anim quis eiusmod eu ut non. Dolore occaecat deserunt ea quis ea adipisicing duis excepteur est.",
  },
];

export function IvanPoluninSection() {
  const attributes = details.map((attr) => (
    <HighlightItem
      title={attr?.title}
      description={attr?.description}
      icon={attr?.icon}
    />
  ));

  return (
    <section id='who-is-ip' className='w-full'>
      <div className='container lg:p-40 px-10 py-24 text-center'>
        <h2 className='mb-7 lg:mb-8'>Who is Ivan Polunin?</h2>
        <div className='mb-5 grid grid-cols-2 gap-5 items-center'>
          <img src={ipImage} alt='Ivan Polunin' />
          <p className='text-left'>
            Sit eiusmod occaecat laborum dolore et in dolor. In laboris commodo
            ipsum consequat non et aute magna est. In incididunt nulla ipsum
            tempor. In labore nulla labore ullamco non. Nostrud consequat
            officia enim aute culpa cillum tempor tempor.
          </p>
        </div>

        <iframe
          // width='560'
          // height='315'
          className='w-full md:w-4/5'
          src='https://www.youtube.com/embed/qP1_ilEYHFk'
          title='YouTube video player'
          frameborder='0'
          allow='accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
          allowfullscreen
        ></iframe>
        <div className='space-y-5'>{attributes}</div>
      </div>
    </section>
  );
}
