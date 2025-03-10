import { Text } from '@/components/atom//Text';
import { sprinkles } from '@/styles/common/sprinkles.css'; // sprinkles import

const NoResult = () => (
  <div className={`${sprinkles({ paddingY: 'large' })}`}>
    <Text textAlign="center" color="textSecondary">
      일치하는 검색어가 없습니다.
      <br />
      검색어를 확인해주세요.
    </Text>
  </div>
);
export default NoResult;
