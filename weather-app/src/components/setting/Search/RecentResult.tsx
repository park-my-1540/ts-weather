import { Text, TextLink } from '@/components/atom//Text';
import Flex from '@/components/atom/Flex';
import ResultBox from '@/components/setting/Search/SearchList';
import { SearchProps } from '@/types/weather';

interface RecentResultProps extends SearchProps {
  deleteAll: () => void;
}
const RecentResult = ({
  deleteAll,
  list,
  update,
  deleteHistory,
}: RecentResultProps) => {
  return (
    <>
      <div className="list recent">
        <Flex
          direction="row"
          align="center"
          justify="between"
          gap="small"
          className="title"
        >
          <Text color="textSecondary">최근검색어</Text>
          <TextLink color="tertiary" sizes="small" onClick={deleteAll}>
            전체삭제
          </TextLink>
        </Flex>
      </div>

      <ResultBox list={list} update={update} deleteHistory={deleteHistory} />
    </>
  );
};

export default RecentResult;
