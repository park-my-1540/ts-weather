import { faSearch, faClose } from '@fortawesome/free-solid-svg-icons';
import { Text, TextLink } from '@/components/atom//Text';
import { IconText, IconButton } from '@/components/atom/IconText';
import Flex from '@/components/atom/Flex';
import { sprinkles } from '@/styles/common/sprinkles.css'; // sprinkles import
import { SearchProps } from '@/types/weather';

const ResultBox = ({ list, update, deleteHistory }: SearchProps) => {
  return (
    <ul className={`${sprinkles({ paddingTop: 'large' })}`}>
      {list.map((item, index) => (
        <li key={index} data-city={item.city}>
          <Flex
            direction="row"
            align="center"
            justify="between"
            gap="small"
            className="title"
          >
            <TextLink
              onClick={() => update(item.city)}
              color="textInfo"
              sizes="mediumlarge"
            >
              <IconText icon={faSearch} style={{ paddingRight: 5 }}></IconText>
              {item.city}
            </TextLink>
            <Text color="textInfo" sizes="medium">
              {item.date}
              <IconButton
                style={{ paddingLeft: 5 }}
                color="textInfo"
                icon={faClose}
                onClick={(e) => deleteHistory(e)}
              ></IconButton>
            </Text>
          </Flex>
        </li>
      ))}
    </ul>
  );
};

interface ListBoxProps {
  list: string[];
  selectCity: (city: string) => void;
}
export const ListBox = ({ list, selectCity }: ListBoxProps) => {
  return (
    <ul className={`${sprinkles({ paddingTop: 'large' })}`}>
      {list.map((item, index) => (
        <li key={index} data-city={item}>
          <Flex
            direction="row"
            align="center"
            justify="between"
            gap="small"
            className="title"
          >
            <TextLink
              onClick={() => selectCity(item)}
              color="textInfo"
              sizes="mediumlarge"
            >
              <IconText icon={faSearch} style={{ paddingRight: 5 }}></IconText>
              {item}
            </TextLink>
          </Flex>
        </li>
      ))}
    </ul>
  );
};

export default ResultBox;
