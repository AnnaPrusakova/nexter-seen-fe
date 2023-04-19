import styles from './footer.module.scss';
import { AiOutlineTwitter } from '@react-icons/all-files/ai/AiOutlineTwitter';
import { AiOutlineInstagram } from '@react-icons/all-files/ai/AiOutlineInstagram';
import { TextLink } from '@/components/common';
import { AiOutlineCopyrightCircle } from '@react-icons/all-files/ai/AiOutlineCopyrightCircle';
import useTranslation from 'next-translate/useTranslation';
import { pages } from '@/data/pages';

export function Footer(): JSX.Element {
	const { t } = useTranslation('common');

	return (
		<div className={styles.footer}>
			<div className={styles.dataWrapper}>
				<div className={styles.socials}>
					<AiOutlineTwitter className={styles.icon} />
					<AiOutlineInstagram className={styles.icon} />
				</div>
				<div className={styles.infoPages}>
					<TextLink
						link={pages[1].route}
						text={'common:about'}
						className={styles.linkText}
					/>
					<TextLink
						link={pages[2].route}
						text={'common:policy'}
						className={styles.linkText}
					/>
					<TextLink
						link={pages[3].route}
						text={'common:contact'}
						className={styles.linkText}
					/>
				</div>
				<div className={styles.rights}>
					<AiOutlineCopyrightCircle className={styles.iconCopyRights} />
					<span className={styles.rightsText}>&nbsp;{t('rights')}</span>
				</div>
			</div>
		</div>
	);
}
