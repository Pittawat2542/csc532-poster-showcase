import Iframe from 'react-iframe';
import React from 'react';

type PosterImageProps = {
	imageURL?: string;
	pdfURL?: string;
};

const PosterImage = ({ imageURL, pdfURL }: PosterImageProps) => {
	if (!!imageURL) {
		return imageURL?.includes('drive.google') ? (
			<img
				className='rounded-md w-full max-w-full h-auto object-cover object-center mx-auto'
				src={imageURL}
				alt='poster'
			/>
		) : (
			<div className='h-80 flex items-center justify-center'>
				<p className='text-3xl text-center'>
				See the poster at <a className='text-blue-500 hover:underline' href={imageURL}>this</a>
			</p>
			</div>
		);
	} else if (!!pdfURL) {
		return (
			<div className='relative overflow-hidden w-full pt-[56.25%]'>
				<Iframe
					className='absolute top-0 left-0 bottom-0 right-0 w-full h-full'
					url={pdfURL!}
				></Iframe>
			</div>
		);
	} else {
		return <p>Poster not available.</p>;
	}
};

export default PosterImage;
