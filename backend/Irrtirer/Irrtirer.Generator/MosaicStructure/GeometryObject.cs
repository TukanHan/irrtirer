using Irrtirer.Generator.Helpers.PolygonHelpers;
using System;
using System.Numerics;

namespace Irrtirer.Generator.MosaicStructure
{
    [Obsolete("Później zrobić prywatny")]
    public abstract class GeometryObject
    {
        public abstract Vector2[] GetWorldVertices();

        public abstract Vector2 GetCentroid();

        public abstract float OuterRadius { get; protected set; }

        public abstract float InnerRadius { get; protected set; }

        public bool IsColliding(GeometryObject otherObj)
        {
            float distance = Vector2.Distance(otherObj.GetCentroid(), GetCentroid());
            if (distance < otherObj.InnerRadius + InnerRadius)
            {
                return true;
            }
            else if (distance < otherObj.OuterRadius + OuterRadius)
            {
                if (SeparatingAxisTheorem.TestIfPolygonCollide(GetWorldVertices(), otherObj.GetWorldVertices()))
                {
                    return true;
                }
            }

            return false;
        }

        public bool IsMaintainingMinimalDistance(GeometryObject otherObj, float minimalDistance)
        {
            float distance = Vector2.Distance(otherObj.GetCentroid(), GetCentroid());
            if (distance < otherObj.InnerRadius + InnerRadius + minimalDistance)
            {
                return false;
            }
            else if (distance <= otherObj.OuterRadius + OuterRadius + minimalDistance)
            {
                if (SeparatingAxisTheorem.GetMinDistance(GetWorldVertices(), otherObj.GetWorldVertices()) < minimalDistance)
                {
                    return false;
                }
            }

            return true;
        }

        public float GetIntersectionArea(GeometryObject otherObj)
        {
            if (Vector2.Distance(otherObj.GetCentroid(), GetCentroid()) < otherObj.OuterRadius + OuterRadius)
            {
                Vector2[] intersectionPolygon = SutherlandHodgmanAlgorithm.ClipPolygon(GetWorldVertices(), otherObj.GetWorldVertices());
                if (intersectionPolygon.Length > 0)
                {
                    return PolygonHelper.CalculatePolygonArea(intersectionPolygon);
                }
            }

            return 0;
        }
    }
}
