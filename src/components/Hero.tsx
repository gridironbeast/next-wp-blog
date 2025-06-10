import React from 'react';
import Image from 'next/image';

export default function Hero() {
  return (
    <div className="mb-4">
      <h1 className="font-bold text-2xl">Hi, I am Denys.</h1>
      <p className="mb-4">
        Я Web разработчик. В этом блоге я пишу про различные события в моей жизни а также делюсь
        своими мыслями по различным темам.
      </p>
      <Image
        src="/hero.png"
        width={790}
        height={102}
        quality={70}
        placeholder="blur"
        blurDataURL="/hero-placeholder.png"
        loading="eager"
        alt="..."
      />
    </div>
  );
}
