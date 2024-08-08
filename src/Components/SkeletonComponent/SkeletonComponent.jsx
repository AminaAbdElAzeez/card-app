import { Skeleton } from "antd";
function SkeletonComponent() {
  return (
    <div
      style={{
        textAlign: "center",
        width: 280,
        margin: "0 auto",
      }}
    >
      <Skeleton.Image
        active
        style={{ width: "200px", height: "250px", marginBottom: "20px" }}
      />
      <Skeleton
        loading={true}
        title={{ width: 120 }}
        paragraph={{
          rows: 4,
        }}
        style={{ marginBottom: "20px" }}
      />
      <Skeleton.Button active style={{ marginRight: "10px" }}></Skeleton.Button>
      <Skeleton.Button active></Skeleton.Button>
    </div>
  );
}

export default SkeletonComponent;
