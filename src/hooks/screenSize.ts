import { useCallback, useEffect, useRef, useState } from 'react';

interface IStateWindowSize {
	width: number;
	height: number;
}

const initSize = {
	width: 0,
	height: 0
};

export function useWindowSize(): IStateWindowSize {
	const [windowSize, setWindowSize] = useState<IStateWindowSize>(initSize);
	const windowSizeRef = useRef<IStateWindowSize>(initSize);

	windowSizeRef.current = windowSize;

	const handleResize = useCallback(() => {
		setWindowSize({
			width: window.innerWidth,
			height: window.innerHeight
		});
	}, []);

	useEffect(() => {
		if (typeof window !== undefined) {
			handleResize();

			window.addEventListener('resize', handleResize);

			return () => window.removeEventListener('resize', handleResize);
		}
	}, [handleResize]);
	return windowSizeRef.current;
}
