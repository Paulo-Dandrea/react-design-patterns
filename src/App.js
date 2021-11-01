import { people } from "./data";
import { PeopleLargeListItem } from "./components/PeopleLargeListItem";
import { RegularList } from "./layout/components/RegularList";
import SplitScreen from "./layout/split-screen";
import { PeopleSmallListItem } from "./components/PeopleSmallListItem";

export default function App() {
  return (
    <div>
      <SplitScreen leftWeight="2">
        <RegularList
          items={people}
          resourceName="person"
          itemComponent={PeopleLargeListItem}
        />
        <RegularList
          items={people}
          resourceName="person"
          itemComponent={PeopleSmallListItem}
        />
      </SplitScreen>
    </div>
  );
}
