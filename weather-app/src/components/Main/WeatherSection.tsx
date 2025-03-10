import { IconDefinition } from '@fortawesome/free-solid-svg-icons';
import Flex from '@/components/atom/Flex';
import { IconText } from '@/components/atom/IconText';
import { Text } from '@/components/atom/Text';
import { weatherIcon, conditionalBorder } from '@/styles/style.css';

interface WeatherSectionProps {
  title: string;
  items: { icon: IconDefinition; label: string; value: string | number }[];
}

export default function WeatherSection({ title, items }: WeatherSectionProps) {
  return (
    <>
      <Flex
        direction="column"
        align="center"
        justify="between"
        gap="small"
        className={conditionalBorder}
      >
        <Text
          sizes="medium"
          color="accent"
          textAlign="center"
          style={{ padding: '8px 0' }}
        >
          {title}
        </Text>
        <Flex direction="row" align="center" justify="between" gap="small">
          {items.map((item, index) => (
            <div className={weatherIcon} key={index}>
              <IconText icon={item.icon} color="accent" fontSize="26px" />
              <Text
                sizes="medium"
                color="accent"
              >{`${item.label}\n${item.value}`}</Text>
            </div>
          ))}
        </Flex>
      </Flex>
    </>
  );
}
