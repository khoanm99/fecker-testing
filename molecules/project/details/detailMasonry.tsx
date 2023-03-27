import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';
import ProjectCard from '../projectCard';

const DetailMasonry = ({ listImage }: { listImage: any[] }) => {
  return (
    <>
      <ResponsiveMasonry columnsCountBreakPoints={{ 320: 1, 1023: 2 }}>
        <Masonry
          gutter={`40px`}
          className={`lg:gap-[40px] max-[1023px]:[&>div]:!gap-[20px]`}
        >
          {listImage.map((itemTeam: any, key: number) => {
            return (
              <div
                key={key}
                onClick={() => {
                  console.log('onen popup');
                }}
              >
                <ProjectCard dataTeam={itemTeam.attributes} />
              </div>
            );
          })}
        </Masonry>
      </ResponsiveMasonry>
    </>
  );
};

export default DetailMasonry;
