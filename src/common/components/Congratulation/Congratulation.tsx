import Image from 'next/image';

import { ContentHeader } from '@/common/components/ContentHeader';
import { NextButton } from '@/components/Auth/NextButton';
import DefaultCongratulationImage
  from '@/common/assets/icons/congratulation-check.svg';

import {
  CongratulationWrapper,
  CongratulationContent,
} from './Congratulation.styled';

type CongratulationProps = {
  title: string;
  subtitle: string;
  imageSrc?: string;
  buttonText: string;
  onButtonClick: () => void;
};

function Congratulation({
  title,
  subtitle,
  imageSrc = DefaultCongratulationImage,
  buttonText,
  onButtonClick,
}: CongratulationProps) {
  return (
    <CongratulationWrapper>
      <ContentHeader title={title} subtitle={subtitle} />
      <CongratulationContent>
        <Image src={imageSrc} alt="축하 이미지" width={160} height={160} />
        <NextButton type="button" text={buttonText} onClick={onButtonClick} />
      </CongratulationContent>
    </CongratulationWrapper>
  );
}

export default Congratulation;
