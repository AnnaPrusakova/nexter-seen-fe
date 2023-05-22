import Image from 'next/image';
import styles from './home.module.scss';
import { Footer } from '@/components/common/footer/Footer';
import Poster from '../../../../public/poster.png';
import Poster2 from '../../../../public/poster2.png';

export function HomePage(): JSX.Element {
	return (
		<div>
			<div className={styles.firstSection}>
				<Image src={Poster} alt={'Poster'} className={styles.firstPoster} />
				<div className={styles.firstPosterShadow} />
			</div>
			<div className={styles.secondSection}></div>
			<div className={styles.thirdSection}>
				<Image src={Poster2} alt={'Poster'} className={styles.firstPoster} />
				<div className={styles.firstPosterShadow} />
			</div>
			<Footer />
		</div>
	);
}
