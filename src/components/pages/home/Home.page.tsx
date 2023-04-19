import Image from 'next/image';
import styles from './home.module.scss';
import { Footer } from '@/components/common/footer/Footer';

export function HomePage(): JSX.Element {
	return (
		<div>
			<div className={styles.firstSection}>
				<div className={styles.firstPoster}>
					<Image fill src={'/poster_big1.png'} alt={'poster'} />
				</div>
				<div className={styles.firstPosterShadow} />
				<div className={styles.textWrapper}>
					<span className={styles.head}>Nexter seen </span>
					<span className={styles.text}>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
						nec semper enim, quis vehicula quam. Vestibulum nulla nisl, molestie
						non arcu ut, interdum efficitur nisi. Fusce nec varius nunc, nec
						accumsan dui. Fusce et arcu felis. Aenean ut dui tincidunt velit
						varius ullamcorper quis vitae neque. Ut suscipit augue erat.{' '}
					</span>
				</div>
			</div>
			<div className={styles.secondSection}>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nec
				semper enim, quis vehicula quam. Vestibulum nulla nisl, molestie non
				arcu ut, interdum efficitur nisi. Fusce nec varius nunc, nec accumsan
				dui. Fusce et arcu felis. Aenean ut dui tincidunt velit varius
				ullamcorper quis vitae neque. Ut suscipit augue erat.
			</div>
			<div className={styles.thirdSection}>
				<div className={styles.secondPoster}>
					<Image
						width={1600}
						height={100}
						src={'/poster_big2.png'}
						alt={'poster'}
					/>
					<div className={styles.secondPosterShadow} />
				</div>
			</div>
			<Footer />
		</div>
	);
}
