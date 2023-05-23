import Image from 'next/image';
import styles from './home.module.scss';
import Poster from '../../../../public/poster.png';
import Poster2 from '../../../../public/poster2.png';
import MobileMockup from '../../../../public/mobile_mock.png';
import DesktopMockup from '../../../../public/desktop_mock.png';

export function HomePage(): JSX.Element {
	return (
		<div>
			<div className={styles.firstSection}>
				<Image src={Poster} alt={'Poster'} className={styles.firstPoster} />
				<div className={styles.firstPosterShadow} />
			</div>
			<div className={styles.secondSection}>
				<div className={styles.mockupWrapper}>
					<Image src={DesktopMockup} alt={'desktop mockup'} />
					<Image src={MobileMockup} alt={'mobile mockup'} />
				</div>
			</div>
			<div className={styles.thirdSection}>
				<Image src={Poster2} alt={'Poster'} className={styles.firstPoster} />
				<div className={styles.firstPosterShadow} />
			</div>
		</div>
	);
}
