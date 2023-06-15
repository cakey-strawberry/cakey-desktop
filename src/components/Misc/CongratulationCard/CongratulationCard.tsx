import Image from 'next/image';

import { ContentHeader } from '@/common/components/ContentHeader';
import { NextButton } from '@/components/Auth/NextButton';
import DefaultCongratulationImage
  from '@/common/assets/icons/congratulation-check.svg';

import {
  CongratulationCardWrapper,
  CongratulationCardContainer,
} from './CongratulationCard.styled';

import type { SxProps } from '@mui/material/styles';

type CongratulationCardProps = {
  title: string;
  subtitle: string;
  imageSrc?: string;
  buttonText: string;
  onButtonClick: () => void;
  sx?: SxProps;
};

function CongratulationCard({
  title,
  subtitle,
  imageSrc = DefaultCongratulationImage,
  buttonText,
  onButtonClick,
  sx,
}: CongratulationCardProps) {
  return (
    <CongratulationCardWrapper sx={sx}>
      <ContentHeader title={title} subtitle={subtitle} />
      <CongratulationCardContainer>
        <Image src={imageSrc} alt="축하 이미지" width={160} height={160} />
        <NextButton type="button" text={buttonText} onClick={onButtonClick} />
      </CongratulationCardContainer>
    </CongratulationCardWrapper>
  );
}

export default CongratulationCard;
